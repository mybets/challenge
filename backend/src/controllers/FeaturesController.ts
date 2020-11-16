import {Request, Response} from 'express';

class FeatureController {

  show (request: Request, response: Response) {

    return response.json([{
      id: 1,
      iconPath: `${process.env.APP_API_URL}/assets/icon-money.png`,
      description: 'Saiba se seu perfil é indicado para Lay ou Back',
      isActive: false
    },{
      id: 2,
      iconPath: `${process.env.APP_API_URL}/assets/icon-dashboard.png`,
      description: 'Analise seu perfil e entenda seus tipos de mercado',
      isActive: true
    },{
      id: 3,
      iconPath: `${process.env.APP_API_URL}/assets/icon-calculator.png`,
      description: 'Ganhe até 2x mais nos seus mercados',
      isActive: false
    }])
  }
}

export default FeatureController;
