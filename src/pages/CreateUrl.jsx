import axios from "axios";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";

const CreateUrl = () => {
  const [tableData, setTableData] = useState([]);
  // const [newData, setNewData] = useState([]);

  // const email = useSelector((state) => state.auth.user.email);

  const initialValues = { longUrl: "" };

  const validationSchema = Yup.object({
    longUrl: Yup.string().required("Url is required"),
  });

  const onSubmit = async (values) => {
    // await axios
    //   .post("http://localhost:8080/api/url/createURL", {
    //     ...values,
    //     email,
    //   })
    //   .then((res) => toast.success(res.data.message));

    console.log(values);

    // setNewData(res.data.data);
  };

  // console.log(newData);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.post("http://localhost:8080/api/url/all-urls", {
        email: "manupriyan722@gmail.com",
      });
      setTableData(res.data.data);
    };
    fetchData();
  }, []);

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

        <table className="table table-striped table-hover table-responsive ">
          <thead>
            <tr>
              <th>Full URL</th>
              <th>Short URL</th>
              <th>Clicks</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>
                  <a href={item.longUrl} target="_blank">
                    {item.longUrl}
                  </a>
                </td>
                <td>
                  <a href={item.longUrl} target="_blank">
                    {item.shortUrl}
                  </a>
                </td>
                <td>{item.clicked}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreateUrl;
