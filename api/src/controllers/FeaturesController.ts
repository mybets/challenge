import { Request, Response } from "express";

interface Feature {
  icon: string;
  description: string;
}

export class FeaturesController {
  getAll(request: Request, response: Response) {
    const features: Array<Feature> = [
      {
        icon: "money",
        description: "Saiba se seu perfil é indicado para Lay ou Back"
      },
      {
        icon: "dashboard",
        description: "Analise seu perfil e entenda seus tipos de mercado"
      },
      {
        icon: "calculator",
        description: "Ganhe até 2x mais nos seus mercados"
      }
    ];

    return response.json(features);
  }
}
