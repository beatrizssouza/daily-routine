import { UserDTO } from "../../common/data/UserDTO";
import { DailyRoutineAPI } from "../Services";

class UserRequest {
  private user: string;

  constructor() {
    this.user = "/auth/register";
  }

  async sendUser(user: UserDTO) {
    return await DailyRoutineAPI.post(`${this.user}`, user);
  }
}

export default new UserRequest();
