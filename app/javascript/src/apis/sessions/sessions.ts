import axios from "axios";

export async function refeshToken(recoil) {
  const res = await axios.post('/refresh_token');
}
