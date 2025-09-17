import { gql } from "@apollo/client";

const SQUARE_OAUTH_PARAMS = gql`
  mutation GenerateSquareOAuthParams {
    Retailer {
      generateSquareOAuthParams {
        squareCodeVerifier
        squareCodeChallenge
        baseUrl
        clientId
        squareState
        redirectUri
      }
    }
  }
`;

export async function fetcher(url: string) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: SQUARE_OAUTH_PARAMS,
    }),
  });
  const squareParams = await res.json();
  console.log(squareParams);
  //   return squareParams.data.Retailer.generateSquareOAuthParams;
  return squareParams;
}
