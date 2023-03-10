import type { NextApiRequest, NextApiResponse } from 'next'

type SampleData = {
  test: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SampleData>
) {
    res.status(200).json({ test: 'Success! This is some test data which was fetched from the api/sample route!' })
}