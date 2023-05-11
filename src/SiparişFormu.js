import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import './SiparişFormu.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ekMalzemeler = ["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates", "Misir", "Sucuk", "Jalepeno", "Biber", "Ananas", "Kabak", "Roka"];


const SiparisFormu = () => {
  const [selectedCount, setSelectedCount] = useState(0);
  const [checkedEkMalzeme, SetCheckedEkMalzeme] = useState([]);
  const [numberOfPizza, SetNumberOfPizza] = useState();
  const [pizzaStock, SetPizzaStock] = useState("...");
  const [form, setForm] = useState({
    boyut: '',
    hamurSec: '',
    ekMalzeme: [],
    siparisNotu: '',
    adet: 0,
  })
  const [fiyat, setFiyat] = useState(85);
  const [checkedState, setCheckedState] = useState(0)
  // const handleCheckboxChange = (event) => {
  //   const { name, checked } = event.target;
  //   setForm((prevState) => ({ ...prevState, [name]: checked }));

  //   // Seçili kutucuk sayısını güncelle
  //   setSelectedCount((prevCount) => {
  //     if (checked) {
  //       return prevCount + 1;
  //     } else {
  //       return prevCount - 1;
  //     }

  //   });
  // }; 

  // const schema = object().shape({
  //   boyut: string()
  //     .required('İsim zorunlu.')
  //     .min(2, "İsim En az 2 karakter olmali! "),
  //   lastName: string()
  //     .required('Soyisim zorunlu.')
  //     .min(2, "İsim En az 2 karakter olmali! "),
  //   email: string()
  //     .email('Invalid email address')
  //     .required('Email gerekli'),
  //   password: string()
  //     .min(6, 'Password must be at least 6 characters')
  //     .required('Password gerekli'),
  //   tos: boolean()
  //     .oneOf([true], 'You must accept the terms of service'),
  // });


  // const isCheckboxDisabled = selectedCount >= 10;


  //Ek Malzeme Seçimi
  const changeHandlerEkMalzeme = (e) => {
    const { value, checked } = e.target;
    const newArr = [...checkedEkMalzeme, value];
    if (checked) {
        newArr.push(value);
        setFiyat(fiyat + 5);
    } else { SetCheckedEkMalzeme(newArr.filter((item) => item !== value)); }


    setForm({ ...form, ekMalzeme: checkedEkMalzeme });
  }

  const changeHandlerCounterPizza = (e) => {
    if (numberOfPizza > 0) {
      SetNumberOfPizza(numberOfPizza - 1)
    }
    else {
      numberOfPizza < pizzaStock && SetNumberOfPizza(numberOfPizza + 1)
    }
    setForm({ ...form, number_of_pizza: numberOfPizza });
  }


  const history = useHistory();
  const handleSiparisVerClick = ( ) => {
    axios.post('https://reqres.in/api/users', form)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    history.push('./SiparişOnay');
  }
  

  return (
    <div>
      <div className="div-header">
        <h1>Teknolojik Yemekler</h1>
        <p className="header-link"><Link to="/" className="no-underline">Anasayfa</Link>-Seçenekler-<strong>Sipariş Oluştur</strong></p>
      </div>
      <body className="order-pizza-body">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ marginRight: '0' }}>Positon Absolute Acı Pizza 85 TL</h2>
        </div>
        <p className="pizza-aciklama" >Pizza, İtalyan mutfağının dünya çapında en sevilen lezzetlerinden biridir. Pişmiş hamurun üzerine sürülen domates sosu ve çeşitli malzemelerle süslenen pizza, her damak tadına hitap edecek şekilde hazırlanabilir. Peynir, mantar, sucuk, jambon, zeytin, biber ve soğan gibi birçok malzemeyle zenginleştirilerek servis edilen pizza, sıcak ve lezzetli bir yemek seçeneği sunar.
        </p>
        <FormGroup id="boyutSec">
          <Label>
            Boyut Seç
            <div style={{
              textAlign: 'left',
              justifyContent: 'center',
              paddingLeft: '30rem',
              paddingRight: '30rem',
            }}>
              <Input
                type="radio"
                name="boyut"
                value="kucuk"
                checked={form.boyut === 'kucuk'}
                onChange={(e) => setForm({ ...form, boyut: e.target.value })}
              />{' '}
              Küçük
              <Input
                type="radio"
                name="boyut"
                value="orta"
                checked={form.boyut === 'orta'}
                onChange={(e) => setForm({ ...form, boyut: e.target.value })}
              />{' '}
              Orta
              <Input
                type="radio"
                name="boyut"
                value="buyuk"
                checked={form.boyut === 'buyuk'}
                onChange={(e) => setForm({ ...form, boyut: e.target.value })}
              />{' '}
              Büyük
            </div>
          </Label>

        </FormGroup>
        <FormGroup id="hamurSec"
          style={{ fontSize: '20px' }}>
          <Label>
            Hamur Seç:
            <Input
              type="select"
              value={form.hamurSec}
              onChange={(e) => setForm({ ...form, hamurSec: e.target.value })}
            >
              <option value={"hamurSec"} >Hamur Seçiniz</option>
              <option value={"ince"} >İnce Hamur</option>
              <option value={"kalin"}>Kalın Hamur</option>
            </Input>
          </Label>
        </FormGroup>
        <FormGroup style={{ justifyContent: 'center', textAlign: 'left', marginTop: '7%', display: 'flex', fontSize: '20px' }}>

          <div>
            <strong className="strong-ekMalzeme" style={{ color: 'black', marginBottom: '15%' }}>Ek Malzemeler</strong>
            {/* <p style={{justifyContent: 'center', textAlign: 'left', marginTop: '7%', display: 'flex', fontSize: '10px', color: 'black'}}>En fazla 10 malzeme seçebilirsiniz. 5 TL</p> */}
            {ekMalzemeler.map((item, index) => {
              return (
                <div key={index}>
                  <Input type="checkbox" id={index}
                    max="5"
                    name="ekMalzeme"
                    value={item}
                    onChange={changeHandlerEkMalzeme}></Input>
                  <Label htmlFor={index}>{item}</Label>

                </div>
              )
            })}
          </div>
        </FormGroup>

        <FormGroup style={{ justifyContent: 'center', display: 'flex', alignItems: 'left', fontSize: '20px', marginTop: '1%' }}>
          <Label  className="siparis-notu">
            Sipariş Notu
          </Label>

          <Label className="input-siparis-notu" >
            <Input
              type="text"
              value={form.siparisNotu}
              onChange={(e) => setForm({ ...form, siparisNotu: e.target.value })}
            />
          </Label>
        </FormGroup>
        <FormGroup style={{ justifyContent: 'center', display: 'flex', alignItems: 'left', fontSize: '20px', marginTop: '1%' }}>
          <Label>
            Adet:
            <Input
              type="number"
              min='1'
              defaultChecked='1'
              checked={form.adet}
              onChange={(e) => setForm({ ...form, numberOfPizza: e.target.checked })}
            />
          </Label>
        </FormGroup>
        <FormGroup style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', fontSize: '20px', marginTop: '1%' }}>
        <Label>
            Sipariş Toplamı
          </Label>
        </FormGroup>
        <FormGroup style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', fontSize: '20px', marginTop: '1%' }}>
        
          <Label>
            Seçilen: {fiyat-85}
          </Label>
        </FormGroup>
        <FormGroup style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', fontSize: '20px', marginTop: '1%' }}>
       
          <Label>
            Toplam: {fiyat}
          </Label>
        </FormGroup>
        <FormGroup style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', fontSize: '20px', marginTop: '1%' }}>
          <Button type="submit" onClick={handleSiparisVerClick} >
            Sipariş Ver
          </Button>
        </FormGroup>
      </body>
    </div>
  );
};
export default SiparisFormu;