const GeoJSONWithPomnik = props => {
    const handleOnEachFeature = (feature, layer) => {
      console.log(layer.feature.properties)
      let name = layer.feature.properties.nazwa
      let imie= layer.feature.properties.imie_i_nazwisko_autora
      let properties= layer.feature.properties
      let typ =layer.feature.properties.typ
      let tabela= `<table><tr><td>Nazwa :</td><td>${name}</td></tr><tr><td>Imię i nazwisko autora :</td><td>${imie}</td></tr><tr><td>Typ :</td><td>${typ}</td></tr></table>`
      let popupContent = tabela;
      // if (props.popupContent.length) popupContent = props.popupContent;
      // else if (feature.properties && feature.properties.popupContent) {
      //   popupContent = feature.properties.popupContent;
      // }
  
      layer.bindPopup(popupContent);
      layer.on({
        mouseover: e => {
          layer.openPopup();
        },
        mouseout: e => {
          layer.closePopup();
        }
      });
    };
    return <GeoJSON {...props} onEachFeature={handleOnEachFeature} />;
  }