import { useState } from "react";
import Header from "./header";
import { TableOne } from "./tableOne";
import { TableTwo } from "./tableTwo";
import "./principal.scss";
import "./table.scss";

function Principal() {
  const [selectTable, setSelectTable] = useState("1");
  return (
    <body className="body">
      <Header />
      <section className="principal">
        <div className="principal__content-select">
          <select
            className="principal__select"
            onChange={(ev) => setSelectTable(ev.target.value)}
          >
            <option className="principal__option" value="">
              Seleccione Tabla
            </option>
            <option className="principal__option" value="1" selected>
              Tabla Uno
            </option>
            <option className="principal__option" value="2">
              Tabla Dos
            </option>
          </select>
        </div>
        {selectTable === "1" ? (
          <TableOne />
        ) : selectTable === "2" ? (
          <TableTwo />
        ) : (
          ""
        )}
      </section>
    </body>
  );
}

export default Principal;
