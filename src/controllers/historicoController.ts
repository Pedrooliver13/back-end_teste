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
      const trx = await db.transaction();
      const results = await trx('historico')
      .join('competidores', 'competidores.id', '=', 'historico.competidor_id')
      .join('pistas', 'pistas.id', '=', 'historico.pista_id')
      .select('*')

      if (!results.length) {
        return res.json({ success: false, message: 'Não tem histórico' });
      }

      await trx.commit();
      return res.json(results);
    } catch (error) {
      console.error(error);
      return res.json({ success: false, message: "Algum erro aconteceu" });
    }
  },
  async show(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const results = await db('historico')
      .join('competidores', 'competidores.id', '=', 'historico.competidor_id')
      .join('pistas', 'pistas.id', '=', 'historico.pista_id')
      .select('*')
      .where('historico.id', id)
      .first();

      if (!results) {
        return res.json({ success: false, message: 'Não encontrado' });
      }
      
      return res.json(results);
    } catch (error) {
      console.log(error);
      return res.json({ success: false, message: "Algum erro aconteceu"  });
    }
  },
  async post(req: Request, res: Response) {
    const { competidor_id, pista_id, data_corrida, tempo } = req.body;
    const hasValidate = validate(req.body);

    if (hasValidate) {
      return res.json(hasValidate);
    }

    try {
      const trx = await db.transaction();

      await trx('historico').insert({
        competidor_id,
        pista_id,
        data_corrida,
        tempo,
      });

      await trx.commit();
      return res.send({ success: true, message: "Historico criado com sucesso" });
    } catch (error) {
      console.error(error);
      return res.json({ success: false, message: "Algum erro aconteceu" });
    }
  },
  async put(req: Request, res: Response) {
    const { id } = req.params;
    const { competidor_id, data_corrida, tempo } = req.body;

    try {
      const trx = await db.transaction();
      const results = await trx('historico').select('*').where('id', id);

      if (!results.length) {
        return res.json({
          success: false,
          message: 'Não encotramos nenhum historico',
        });
      }

      await trx('historico')
        .update({
          id,
          competidor_id,
          data_corrida,
          tempo,
        })
        .where('id', id);

      await trx.commit();

      return res.json({
        success: true,
        message: 'Historico atualizado com sucesso',
      });
    } catch (error) {
      console.error(error);
      return res.json({ success: false, message: 'Algum erro aconteceu' });
    }
  },
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const trx = await db.transaction();
      await trx('historico').where('id', id).delete();
      await trx.commit();

      return res.json({ success: true, message: "Historico deletado com sucesso" });
    } catch (error) {
      console.error(error);
      return res.status(401).json({ success: false, message: "Algum erro aconteceu" });
    }
  },
};
