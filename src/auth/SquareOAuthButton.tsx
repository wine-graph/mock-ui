import useSWR from "swr";
import { fetcher } from "../queries/squareOAuth";

const SquareOAuthButton = () => {
  const { data, isValidating, isLoading } = useSWR(
    "https://wine-retailer.fly.dev/graphql",
    fetcher
  );

  const handleConnection = () => {
    if (data && !isValidating) {
      const {
        squareCodeVerifier,
        squareCodeChallenge,
        baseUrl,
        clientId,
        squareState,
        redirectUri,
      } = data;

      document.cookie = `square-code-verifier=${squareCodeVerifier}; path=/; secure; samesite=Lax`;
      document.cookie = `square-state=${squareState}; path=/; secure; samesite=Lax`;

      const authUrl = `${baseUrl}/oauth2/authorize?client_id=${clientId}&state=${squareState}&scope=ITEMS_READ+INVENTORY_READ+MERCHANT_PROFILE_READ&code_challenge=${squareCodeChallenge}&code_challenge_method=Sha256&redirect_uri=${redirectUri}`;

      window.location.assign(authUrl);
    }
  };

  return (
    <div>
      <button
        disabled={isLoading}
        className="btn btn-outline-primary"
        onClick={handleConnection}
      >
        Connect to Square
      </button>
    </div>
  );
};

export default SquareOAuthButton;
