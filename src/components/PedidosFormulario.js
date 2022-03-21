import React from "react";
import "@styles/components/PedidosFormulario.scss";

const PedidosFormulario = () => {
  const ordenes = [];
  return (
    <form>
      <div className="form__fase-1">
        <label htmlFor="tipo-de-pedido">Selecciona el tipo de Pedido</label>
        <select name="tipo-de-pedido" id="tipo-de-pedido" required>
          <option selected="true">Comida</option>
          <option>Compras en supermercado, bodega o tienda</option>
          <option>Pedido listo en una tienda</option>
          <option id="select-1647884067556-3">Envió personalizado</option>
        </select>
        <button>Continuar</button>
      </div>
      <div className="form__fase-2">
        <label htmlFor="restaurante">Restaurante</label>
        <input id="restaurante"></input>

        <div className="orden">
          <input type="number" defaultValue="1"></input>
          <input type="text" placeholder="Pollo con Tajadas"></input>
        </div>
        <button>Agregar</button>
      </div>
      <div className="form__fase-3">
        <label htmlFor="nombre">A nombre de quien ira el pedido?</label>
        <input type="text" id="nombre" placeholder="Nombre"></input>
        <label htmlFor="direccion">Dirección</label>
        <input id="direccion"></input>
      </div>
    </form>
  );
};

const example = () => {
  return (
    <div className="rendered-form">
      <div className="formbuilder-select form-group field-select-1647884067556">
        <label
          htmlFor="select-1647884067556"
          className="formbuilder-select-label"
        >
          Selecciona el tipo de pedido
          <span className="formbuilder-required">*</span>
        </label>
        <select
          className="form-control"
          name="select-1647884067556"
          id="select-1647884067556"
          required="required"
          aria-required="true"
        >
          <option value="option-1" selected="true" id="select-1647884067556-0">
            Comida
          </option>
          <option value="option-2" id="select-1647884067556-1">
            Compras en supermercado, bodega o tienda
          </option>
          <option value="option-3" id="select-1647884067556-2">
            Pedido listo en una tienda
          </option>
          <option id="select-1647884067556-3">Envio personalizado</option>
        </select>
      </div>
      <div className="formbuilder-button form-group field-button-1647884522117">
        <button
          type="button"
          className="btn-default btn"
          name="button-1647884522117"
          access="false"
          style={{}}
          id="button-1647884522117"
        >
          Continuar
        </button>
      </div>
      <div className="formbuilder-autocomplete form-group field-autocomplete-1647884589162">
        <label
          htmlFor="autocomplete-1647884589162"
          className="formbuilder-autocomplete-label"
        >
          Restaurante<span className="formbuilder-required">*</span>
        </label>
        <input
          className="form-control"
          access="false"
          require-valid-option="false"
          id="autocomplete-1647884589162-input"
          required="required"
          aria-required="true"
          autoComplete="off"
        />
        <input
          className="form-control"
          name="autocomplete-1647884589162"
          access="false"
          require-valid-option="false"
          id="autocomplete-1647884589162"
          required="required"
          aria-required="true"
          type="hidden"
        />
        <ul
          id="autocomplete-1647884589162-list"
          className="formbuilder-autocomplete-list"
        >
          <li value="option-1">International Food Restaurant</li>
          <li value="option-2">SuperPollos 1806</li>
          <li value="option-3">El Profe Grill</li>
        </ul>
      </div>
      <div className="formbuilder-number form-group field-number-1647885128245">
        <label
          htmlFor="number-1647885128245"
          className="formbuilder-number-label"
        >
          Numero<span className="formbuilder-required">*</span>
        </label>
        <input
          type="number"
          className="form-control"
          name="number-1647885128245"
          access="false"
          id="number-1647885128245"
          required="required"
          aria-required="true"
        />
      </div>
      <div className="formbuilder-text form-group field-text-1647885146329">
        <label htmlFor="text-1647885146329" className="formbuilder-text-label">
          Comida o Bebida
        </label>
        <input
          type="text"
          className="form-control"
          name="text-1647885146329"
          access="false"
          id="text-1647885146329"
        />
      </div>
      <div className="formbuilder-button form-group field-button-1647885204412">
        <button
          type="button"
          className="btn-default btn"
          name="button-1647885204412"
          access="false"
          style={{}}
          id="button-1647885204412"
        >
          Añadir Comida/Bebida
        </button>
      </div>
      <div className="formbuilder-button form-group field-button-1647885246612">
        <button
          type="button"
          className="btn-default btn"
          name="button-1647885246612"
          access="false"
          style={{}}
          id="button-1647885246612"
        >
          Continuar
        </button>
      </div>
      <div className="formbuilder-text form-group field-text-1647885316990">
        <label htmlFor="text-1647885316990" className="formbuilder-text-label">
          A nombre de quien sera el pedido?
          <span className="formbuilder-required">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          name="text-1647885316990"
          access="false"
          id="text-1647885316990"
          required="required"
          aria-required="true"
        />
      </div>
      <div className="formbuilder-text form-group field-text-1647885369766">
        <label htmlFor="text-1647885369766" className="formbuilder-text-label">
          Direccion<span className="formbuilder-required">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          name="text-1647885369766"
          access="false"
          id="text-1647885369766"
          required="required"
          aria-required="true"
        />
      </div>
      <div className="formbuilder-button form-group field-button-1647885399244">
        <button
          type="button"
          className="btn-default btn"
          name="button-1647885399244"
          access="false"
          style={{}}
          id="button-1647885399244"
        >
          Pedir
        </button>
      </div>
    </div>
  );
};

export default PedidosFormulario;
