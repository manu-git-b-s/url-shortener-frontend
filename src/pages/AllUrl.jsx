import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const AllUrl = () => {
  const [tableData, setTableData] = useState([]);

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
      <div className="container">
        <h1 className="my-5 text-center">All Url</h1>
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

export default AllUrl;
