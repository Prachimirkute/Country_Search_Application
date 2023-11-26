// CountryPopup.js
import React from "react";
import "./style.css";

const CountryListPopup = ({ countryData, onClose }) => {
  if (!countryData) {
    return null;
  }

  return (
    <div className="popup mLR">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="popupTitle">
          <h3>{countryData.name.common}</h3>
          <img src={countryData.flags.png} />
        </div>
        <div
          className="main-content"
          style={{ overflowY: "auto", overflowX: "auto" }}
        >
          <table className="countryTable ">
            <tbody className="">
              {countryData.name.official && (
                <tr>
                  <td className="fontB">Official:</td>
                  <td>{countryData.name.official}</td>
                </tr>
              )}
              <tr>
                <td className="fontB">Capital:</td>
                <td>{countryData.capital}</td>
              </tr>
              {countryData.currencies && (
                <tr>
                  <td className="fontB">Currency:</td>
                  <td>{CurrenciesF(countryData.currencies)}</td>
                </tr>
              )}

              {countryData.region && (
                <tr>
                  <td className="fontB">Region:</td>
                  <td>{countryData.region}</td>
                </tr>
              )}
              {countryData.subregion && (
                <tr>
                  <td className="fontB">Subregion:</td>
                  <td>{countryData.subregion}</td>
                </tr>
              )}
              {countryData.population && (
                <tr>
                  <td className="fontB">Population:</td>
                  <td>{countryData.population}</td>
                </tr>
              )}
              {countryData.languages && (
                <tr>
                  <td className="fontB">Languages:</td>
                  <td>{LanguagesF(countryData.languages)}</td>
                </tr>
              )}
              <br />
              {countryData.name.nativeName && (
                <tr>
                  <td colSpan="3">
                    <h6 className="fontB">Native Names:</h6>
                    {NativeNamesF(countryData.name.nativeName)}
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <table className="dFlex countryTable countrySecount">
            <tbody className="mLR">
              {countryData.altSpellings && (
                <tr>
                  <td className="fontB">Alternate Spellings:</td>
                  <td>{AlternateSpellingsF(countryData.altSpellings)}</td>
                </tr>
              )}
              <br />
              {countryData.translations && (
                <tr>
                  <td colSpan="3">
                    <h6 className="fontB">Translations:</h6>
                    {TranslationsF(countryData.translations)}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
const CurrenciesF = (currencies) => {
  return Object.keys(currencies).map((code) => (
    <span key={code}>
      Name: {currencies[code].name}
      <br />
      Symbol: {currencies[code].symbol}
    </span>
  ));
};
const LanguagesF = (languages) => {
  return Object.keys(languages).map((code) => (
    <span key={code}>
      {languages[code]} ({code})
      <br />
    </span>
  ));
};

const NativeNamesF = (nativeNames) => {
  const nativeNamesRows = Object.keys(nativeNames).map((langCode) => (
    <tr key={langCode}>
      <td>Language: {langCode}</td>
      <td>Official: {nativeNames[langCode].official}</td>
      <td>Common: {nativeNames[langCode].common}</td>
    </tr>
  ));
  return <table>{nativeNamesRows}</table>;
};

const AlternateSpellingsF = (altSpellings) => {
  return (
    <span>
      {altSpellings.map((spelling, index) => (
        <div key={index}>{spelling}</div>
      ))}
    </span>
  );
};

const TranslationsF = (translations) => {
  const translationRows = Object.keys(translations).map((langCode) => (
    <tr key={langCode}>
      <td>Language: {langCode}</td>
      <td>Official: {translations[langCode].official}</td>
      <td>Common: {translations[langCode].common}</td>
    </tr>
  ));

  return <table>{translationRows}</table>;
};
export default CountryListPopup;
