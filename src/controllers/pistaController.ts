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
      const results = await db('pistas').select('*');

      if (!results) {
        return res.json({
          success: false,
          message: 'Não encontramos nenhuma pista.',
        });
      }

      return res.json(results);
    } catch (error) {
      console.log(error);
      return res.json({ success: false, message: "Aconteceu algum erro" });
    }
  },
  async show(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const results = await db('pistas').select('*').where('id', id).first();

      if (!results) {
        return res.json({
          success: false,
          message: 'Não encontramos nenhuma pista',
        });
      }

      return res.json(results);
    } catch (error) {
      console.log(error);
      return res.send('Error');
    }
  },
  async post(req: Request, res: Response) {
    const { descricao } = req.body;
    const hasValidate = validate(req.body);

    if (hasValidate) {
      return res.json(hasValidate);
    }

    try {
      const trx = await db.transaction();
      await trx('pistas').insert({ descricao });
      await trx.commit();

      return res.json({ success: true, message: "Pista criado com sucesso" });
    } catch (error) {
      console.error(error);
      return res.json({ success: false, message: "Aconteceu algo de errado" });
    }
  },
  async put(req: Request, res: Response) {
    const { id } = req.params;
    const { descricao } = req.body;
    const hasValidate = validate(req.body);

    if (hasValidate) {
      return res.json(hasValidate);
    }

    try {
      const trx = await db.transaction();
      await trx('pistas').update({ id, descricao }).where('id', id).first();
      await trx.commit();

      return res.json({ success: true, message: "Pista atualizado com sucesso" });
    } catch (error) {
      console.error(error);
      return res.json({ error, success: false, message: "Aconteceu algo de errado" });
    }
  },
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const trx = await db.transaction();
      await trx('pistas').where('id', id).delete();
      await trx('historicos').where('pista_id', id).delete();
      await trx.commit();

      return res.json({ success: true, message: "Pista deletado com sucesso" });
    } catch (error) {
      console.error(error);
      return res.status(401).json({ error: `Error` });
    }
  },
};
