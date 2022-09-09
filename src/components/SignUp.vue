<template>
    <form>
    <fieldset class="uk-fieldset">

        <legend class="uk-legend">SignUp Page</legend>

        <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="User Name">
        </div>
        <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Password">
        </div>
        <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Company Name">
        </div>
        <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Email">
        </div>
        <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Phone Number">
        </div>
        <div class="uk-margin">
        <div class="uk-form-horizontal">Point of Sale Software</div>
        <div class="uk-section uk-section-muted">
    <div class="uk-container uk-container-small"></div>
    <div class="uk-form-controls">
            <label><input class="uk-radio" type="radio" name="radio1"> Retail Management System</label><br>
            <label><input class="uk-radio" type="radio" name="radio1"> Microsoft Retail System</label><br>
            <label><input class="uk-radio" type="radio" name="radio1"> Quickbooks Point of Sale</label><br>
            <label><input class="uk-radio" type="radio" name="radio1"> IT Retail</label><br>
            <label><input class="uk-radio" type="radio" name="radio1"> Other</label><br>
    </div>
    <p>
        <button class="uk-button uk-button-primary">SignUp</button>
    </p>
    </div>
        
    </div>
    </fieldset>
</form>




</template>

<script>
export default {
    name:'SignUp'
}
</script>