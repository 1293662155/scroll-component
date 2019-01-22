import Mock from "mockjs";
// import { param2Obj } from "@/utils/";
const List = [];
const events_len = 10 || Math.ceil(Math.random() * 10000);

for (let i = 0; i < events_len; i++) {
  let color = Mock.mock("@hex");
  List.push(
    Mock.mock({
      name: "@name",
      avator: "@image(32x32, " + color + ")"
    })
  );
}

const api = {
  getData: () => {
    return {
      error: 0,
      data: List
    };
  }
};

Mock.mock(/\/api\/data/, "get", api.getData);

export default Mock;
