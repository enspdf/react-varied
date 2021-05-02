import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  password: yup.string().required().min(6),
});

export default yupResolver(schema);
