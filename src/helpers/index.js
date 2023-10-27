const changeVariableCss = (array = [ {nameVariable : '', valueVariable : ''} ]) => {

    for (const properties of array) {
        document.documentElement.style.setProperty(properties.nameVariable, properties.valueVariable);
    }
}

export {
    changeVariableCss
}