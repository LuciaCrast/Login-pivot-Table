import { useState } from "react";
import Header from "./header";
import { TableOne } from "./tableOne";
import { TableTwo } from "./tableTwo";
import "./principal.scss";
import "./table.scss";

function Principal() {
  const [selectTable, setSelectTable] = useState("1");
  return (
    <div className="container">
      <Header />
      <section className="principal">
        <div className="principal__content-select">
          <select
            defaultValue={1}
            className="principal__select"
            onChange={(ev) => setSelectTable(ev.target.value)}
          >
            <option className="principal__option" value="">
              Seleccione Tabla
            </option>
            <option className="principal__option" value="1">
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
    </div>
  );
}

export default Principal;
