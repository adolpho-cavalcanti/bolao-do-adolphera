import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from "next";
import { getPalpitesUsers } from "../../../lib/palpiteUser";
import { prisma } from "../../../lib/prisma";

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if(method == "GET") {
    const palpites = await getPalpitesUsers();

    return res.status(200).json({
      data: palpites
    })
  } else if(method == "POST") {
    const {
      email,
      name,
      champion,
      second,
      Third,
      Fouth
    } = req.body;

    const palpiteUser = await prisma.user.create({
      data: {
        email,
        name,
        champion,
        second,
        Third,
        Fouth
      }
    });

    return res.status(201).json({
      data: palpiteUser
    })
  }
  
}