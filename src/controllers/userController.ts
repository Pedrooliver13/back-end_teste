import { Request, Response } from 'express';
import db from '../database/connection';

function validate(body: any) {
  const keys = Object.keys(body);

  for (let key of keys) {
    if (body[key] === '')
      return {
        success: false,
        message: 'Por favor preencha todos os campos',
      };
  }

  return;
}

export default {
  async index(req: Request, res: Response) {
    try {
      const results = await db('competidores').select('*');

      if (!results.length) {
        return res.json({
          sucess: false,
          message: 'Não encotramos nenhum competidor',
        });
      }

      return res.json(results);
    } catch (error) {
      console.error(error);
      return res.json({ success: false, message: 'Algum erro aconteceu' });
    }
  },
  async show(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const results = await db('competidores')
        .select('*')
        .where('id', id)
        .first();

      if (!results) {
        return res.json({
          success: false,
          message: 'Não encontramos o competidor',
        });
      }

      return res.json(results);
    } catch (error) {
      console.log(error);
      return res.json({ success: false, message: 'Algo aconteceu' });
    }
  },
  async post(req: Request, res: Response) {
    const { nome, sexo, temperatura, peso, altura } = req.body;
    const hasValidate = validate(req.body);

    if (hasValidate) {
      return res.json(hasValidate);
    }

    try {
      const trx = await db.transaction();
      await trx('competidores').insert({
        nome,
        sexo,
        temperatura,
        peso,
        altura,
      });

      await trx.commit();
      return res.json({ success: true, message: 'Postado com sucesso' });
    } catch (error) {
      console.error(error);
      return res.json({ success: false, message: 'Algum erro aconteceu' });
    }
  },
  async put(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, sexo, temperatura, peso, altura } = req.body;
    const hasValidate = validate(req.body);

    if (hasValidate) {
      return res.json(hasValidate);
    }

    try {
      const trx = await db.transaction();
      const results = await trx('competidores').select('*').where('id', id);

      if (!results.length) {
        return res.json({
          success: false,
          message: 'Não encotramos nenhum competidor',
        });
      }

      await trx('competidores')
        .update({
          id,
          nome,
          sexo,
          temperatura,
          peso,
          altura,
        })
        .where('id', id);

      await trx.commit();
      return res.json({ success: true, messsage: 'Atualizado com sucesso' });
    } catch (error) {
      console.error(error);
      return res.json({ success: false, message: error });
    }
  },
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const trx = await db.transaction();
      await trx('competidores').where('id', id).delete();

      await trx.commit();
      return res.json({ success: true });
    } catch (error) {
      console.error(error);
      return res.status(401).json({ error: `Error` });
    }
  },
};
