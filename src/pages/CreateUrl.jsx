import axios from "axios";
import Navbar from "../components/Navbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const CreateUrl = ({ user }) => {
  const initialValues = { longUrl: "" };

  const validationSchema = Yup.object({
    longUrl: Yup.string().required("Url is required"),
  });

  const onSubmit = async (values) => {
    await axios
      .post("http://localhost:8080/api/url/createURL", {
        ...values,
        email: user.email,
      })
      .then((res) => toast.success(res.data.message));

    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div>
      <Navbar />
      <div className="container p-5 my-5 rounded">
        <h1 className="text-center mb-5">URL Shortener</h1>
        <form
          method="POST"
          className="my-5 p-5 text-dark bg-light"
          onSubmit={onSubmit}
        >
          <div className="mb-3">
            <label htmlFor="longUrl" className="form-label">
              Full Url
            </label>
            <input
              required
              placeholder="Enter your url"
              type="text"
              className="form-control"
              id="longUrl"
              value={formik.values.longUrl}
              onChange={formik.handleChange}
            />
            <div className="text-danger">{formik.errors.longUrl}</div>
          </div>

          <div className="d-grid mt-5">
            <button type="submit" className="btn btn-success">
              Shrink
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUrl;
