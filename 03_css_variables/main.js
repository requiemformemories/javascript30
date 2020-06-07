document.addEventListener("DOMContentLoaded", function() {
    // querySelectorAll() return a NodeList but an array. An array have more
    // methods for dealing with an array, such as map() and reduce().
    const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
        // The dataset is a DOMStringMap object that contains all the data
        // attributes from the specific element.
        const suffix = this.dataset.sizing || '';
        console.log(this.value)
        document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`)
    }
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
})
