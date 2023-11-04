// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: {
    name: string;
    age: number;
    id: number;
  }[];
  status: boolean;
  statusCode: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = [
    {
      id: 1,
      name: "eja",
      age: 23,
    },
  ];

  res.status(200).json({ status: true, statusCode: 200, data });
}
