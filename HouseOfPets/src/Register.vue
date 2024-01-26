<template>
    <div class="page-wrapper">
        <img src="./assets/houseOfPets.png" id="register-image">
        <div class="register-form-wrapper">
            <form class="register-form">
                <label for="username">Username</label><br>
                <input type="text" id="username" name="username" value="username"><br>
                <label for="password">Password</label><br>
                <input type="password" id="password" name="password" value="password"><br>
                <label for="password">Confirm Password:</label><br>
                <input type="password" id="confirm-password" name="confirm-password" value="password"><br><br>
                <button id="register-button">Register</button>
            </form>
        </div>
    </div>
</template>
<style>
.page-wrapper{
    margin-top: 20vh;
    display: flex;
    flex-direction: row;
}

.register-image {
    width: 50vw;
}

.register-form-wrapper {
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
}

.register-form {
    margin-left: 10vw;
}

#register-button {
    background-color: #E8A444;
    color: white;
    border: 0;
    border-radius: 2vh;
    height: 2em;
    width: 6em;
}

#register-button:hover {
  background-color: #EED5B7;
}
</style>