import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import "./SiparisFormu.css";
import { useHistory } from "react-router-dom";

const SiparisFormu = (props) => {
  let { price } = props;

  const pizza = [
    {
      size: ["S", "M", "L"],
      thickness: ["--Hamur Kalınlığı Seç--", "İnce", "Normal", "Kalın"],
      extraIngredients: [
        "Pepperoni",
        "Domates",
        "Biber",
        "Sosis",
        "Mısır",
        "Sucuk",
        "Kanada Jambonu",
        "Kekik",
        "Ananas",
        "Tavuk Izgara",
        "Jalepeno",
        "Kabak",
        "Sogan",
        "Sarımsak",
      ],
      extraIngredientsPrice: 5,
    },
  ];

  const initialForm = {
    customerName: "",
    size: [],
    thickness: [],
    extraIngredients: [],
    note: "",
    count: 1,
    ingredTotalCost: 0,
    totalPrice: 0,
  };

  const initialError = {
    customerName: "",
    size: "",
    thickness: "",
    extraIngredients: "",
  };
  const newPrice = (price) => {
    if (
      formData.size !== "S" &&
      formData.size !== "M" &&
      formData.size !== "L"
    ) {
      return (price -= price);
    } else if (formData.size === "S") {
      return price;
    } else if (formData.size === "M") {
      return (price += 10);
    } else if (formData.size === "L") {
      return (price += 20);
    }
  };

  const [count, setCount] = useState(1);
  const decrease = () => {
    setCount(count - 1);
  };
  const increase = () => {
    setCount(count + 1);
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState(initialError);
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();
  const [ingredTotalCost, setIngredTotalCost] = useState(0);

  const formSchema = yup.object().shape({
    customerName: yup
      .string()
      .min(2, "En az iki karakter girmelisiniz.")
      .required("Ad alanı boş bırakılamaz."),
    size: yup.string().oneOf(pizza[0].size, "Bir boyut seçmelisiniz."),
    thickness: yup
      .string()
      .notOneOf([pizza[0].thickness[0]], "Bir hamur kalınlığı seçmelisiniz."),
    extraIngredients: yup
      .array()
      .min(2, "En az 2 malzeme seçmelisiniz.")
      .max(
        10,
        "En fazla 10 ek malzeme seçebilirsiniz. En az 1 malzeme çıkarınız."
      ),
  });

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => setIsValid(valid));
  }, [formData]);

  useEffect(() => {
    const newFormData = { ...formData };
    newFormData.ingredTotalCost = newFormData.count * ingredTotalCost;
    newFormData.totalPrice =
      newFormData.count * newPrice + newFormData.ingredTotalCost;
    setFormData(newFormData);
  }, [ingredTotalCost, formData.count]);

  const changeHandler = (event) => {
    let { name, type, checked, value } = event.target;
    let val = type === "checkbox" ? checked : value;

    let newFormData = {
      ...formData,
    };

    if (type === "checkbox") {
      if (val) {
        if (newFormData.extraIngredients.length <= 10) {
          newFormData.extraIngredients.push(name);
          setIngredTotalCost((e) => e + pizza[0].extraIngredientsPrice);
        } else {
          return;
        }
      } else {
        const ind = newFormData.extraIngredients.indexOf(name);
        newFormData.extraIngredients.splice(ind, 1);
        setIngredTotalCost((e) => e - pizza[0].extraIngredientsPrice);
      }
      yup
        .reach(formSchema, "extraIngredients")
        .validate(newFormData.extraIngredients)
        .then(() => {
          const newErrors = { ...errors, extraIngredients: "" };
          setErrors(newErrors);
        })
        .catch((error) => {
          const newErrors = { ...errors, extraIngredients: error.errors[0] };
          setErrors(newErrors);
        });
    } else {
      newFormData[name] = val;

      if ("customerName" === name || "size" === name || "thickness" === name) {
        yup
          .reach(formSchema, name)
          .validate(val)
          .then(() => {
            const newErrors = { ...errors, [name]: "" };
            setErrors(newErrors);
          })
          .catch((error) => {
            const newErrors = { ...errors, [name]: error.errors[0] };
            setErrors(newErrors);
          });
      }
    }

    console.log(newFormData);

    setFormData(newFormData);
  };

  const orderData = {
    customerName: formData.customerName,
    pizzaName: "Position Absolute Acı Pizza",
    size: formData.size,
    thickness: formData.thickness,
    extraIngredients: formData.extraIngredients,
    note: formData.note,
    secimler: count * ingredTotalCost,
    totalPrice: count * (ingredTotalCost + newPrice(price)),
  };

  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .post("https://reqres.in/api/users", formData)
      .then((res) => {
        setFormData({
          ...formData,
          id: res.data.id,
          createdAt: res.data.createdAt,
        });
      })
      .catch((error) => {
        console.log(error.response.message);
      });
    history.push("/siparisalindi", orderData);
    setFormData(initialForm);
  };

  return (
    <form id="pizza-form" onSubmit={submitHandler} data-testid="form">
      <div className="name-input-div">
        <label className="name-label">
          Müşteri adı: <span>*</span>{" "}
          <textarea
            className="name-input-textarea"
            id="name-input"
            name="customerName"
            value={formData.customerName}
            placeholder="Ad giriniz"
            onChange={changeHandler}
            data-testid="name"
          ></textarea>
        </label>
        {errors.customerName && (
          <p data-testid="error" className="error">
            {errors.customerName}
          </p>
        )}
      </div>
      <div className="size-thickness-options">
        <div className="size">
          <p className="titles">Boyut Seç</p>
          <span>*</span>
          <div id="size-radio" className="size-options">
            <div className="size-option">
              <input
                className="size-input"
                id="küçük"
                name="size"
                type="radio"
                value="S"
                ckecked={formData.size === "S"}
                onChange={changeHandler}
                data-testid="input"
              />
              <label className="size-label" htmlFor="küçük">
                S
              </label>
            </div>
            <div className="size-option">
              <input
                className="size-input"
                id="orta"
                name="size"
                type="radio"
                value="M"
                checked={formData.size === "M"}
                onChange={changeHandler}
                data-testid="input"
              />
              <label className="size-label" htmlFor="orta">
                M
              </label>
            </div>
            <div className="size-option">
              <input
                className="size-input"
                id="büyük"
                name="size"
                type="radio"
                value="L"
                checked={formData.size === "L"}
                onChange={changeHandler}
                data-testid="input"
              />
              <label className="size-label" htmlFor="büyük">
                L
              </label>
            </div>
          </div>
          {errors.size && <p className="error">{errors.size}</p>}
        </div>
        <div className="thickness">
          <p className="titles">Hamur Seç</p>
          <span>*</span>
          <div className="thickness-options" onChange={changeHandler}>
            <select onChange={changeHandler} name="thickness" id="thickness">
              <option value="">--Hamur Kalınlığı Seç--</option>
              <option selected={formData.thickness === "İnce"} value="İnce">
                İnce
              </option>
              <option selected={formData.thickness === "Normal"} value="Normal">
                Normal
              </option>
              <option selected={formData.thickness === "Kalın"} value="Kalın">
                Kalın
              </option>
            </select>
          </div>
          {errors.thickness && (
            <p data-testid="error" className="error">
              {errors.thickness}
            </p>
          )}
        </div>
      </div>

      <div className="extra-ingredients-container">
        <p className="titles">Ek Malzemeler</p>
        <p className="extra-ingredients-details">
          En fazla 10 malzeme seçebilirsiniz.5₺
        </p>
        <div id="malzemeler-checkbox" className="extra-ingredients">
          {pizza[0].extraIngredients.map((item, index) => (
            <div className="checkbox-input-label">
              <input
                id={item}
                name={item}
                key={index}
                type="checkbox"
                checked={formData.extraIngredients.includes(item)}
                onChange={changeHandler}
                data-testid="input"
                role="input"
              ></input>
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
        {errors.extraIngredients && (
          <p className="error">{errors.extraIngredients}</p>
        )}
      </div>

      <div className="order-note-container">
        <p className="titles">Sipariş Notu</p>
        <textarea
          id="special-text"
          name="note"
          placeholder="Siparişine eklemek istediğin bir not var mı ?"
          value={formData.note}
          onChange={changeHandler}
        ></textarea>
      </div>
      <hr />
      <div className="counter-total">
        <div className="counter">
          <div className="counter-decrease">
            <button
              className="counter-decrease-button"
              onChange={changeHandler}
              name="quantity-button"
              type="button"
              onClick={decrease}
              disabled={count <= 1 ? true : false}
              data-testid="counter"
            >
              -
            </button>
          </div>
          <div className="counter-count" name="quantity" value={formData.count}>
            {count}
          </div>
          <div className="counter-increase">
            <button
              className="counter-increase-button"
              onChange={changeHandler}
              name="quantity-button"
              type="button"
              onClick={increase}
              disabled={count >= 10 ? true : false}
              data-testid="counter"
            >
              +
            </button>
          </div>
        </div>
        <div className="total-button">
          <div className="order-total">
            <div className="siparis-toplami">Sipariş Toplamı</div>
            <div className="secimler">
              Seçimler:
              <span>{orderData.secimler}₺</span>
            </div>
            <div className="toplam">
              Toplam:
              <span>{orderData.totalPrice}₺</span>
            </div>
          </div>
          <div className="order-button">
            <button
              className="submit-button"
              id="order-button"
              disabled={!isValid}
              type="submit"
            >
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default SiparisFormu;
