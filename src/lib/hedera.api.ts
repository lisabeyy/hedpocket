import axios from "axios";
import {retrieveToken} from "../utils/tokens.utils";



export async function fetchAssets(accountAddress: string) {

  try { // 👇️ const data: CreateUserResponse
    const responseObj = await axios.get<any>(process.env.REACT_APP_MIRRORNODE_API + '/data/accounts/' + accountAddress, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    },);

    console.log('response body', responseObj.data)
    const newRes = responseObj.data.balance.tokens.map(r => {
      const token = retrieveToken(r.token_id);
      return {
        ... token,
        ...r
      }
    })

    responseObj.data.balance.tokens = newRes;

    console.log('newRes', responseObj.data);

    return {status: 200, body: responseObj.data};

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      // 👇️ error: AxiosError<any, any>
      return {status: 400, body: error.message};
    } else {
      console.log('unexpected error: ', error);
      return {status: 400, body: 'An unexpected error occurred'};
    }


  }

}



