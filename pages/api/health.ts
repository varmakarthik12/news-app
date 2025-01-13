import { NextApiRequest, NextApiResponse } from 'next';

/**
 * API handler to check the health status of the application.
 *
 * @param {NextApiRequest} req - The incoming request object.
 * @param {NextApiResponse} res - The outgoing response object.
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ status: 'ok' });
}
