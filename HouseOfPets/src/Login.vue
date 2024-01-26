<template>
    <div class="page-wrapper">
        <img src="./assets/houseOfPets.png" id="login-image">
        <div class="login-form-wrapper">
            <form class="login-form">
                <label for="username">Username</label><br>
                <input type="text" id="username" name="username" value="username"><br>
                <label for="password">Password</label><br>
                <input type="password" id="password" name="password" value="password"><br><br>
                <button id="login-button">Login</button>
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

.login-image {
    width: 50vw;
}

.login-form-wrapper {
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
}

.login-form {
    margin-left: 10vw;
}

#login-button {
    background-color: #E8A444;
    color: white;
    border: 0;
    border-radius: 2vh;
    height: 2em;
    width: 6em;
}

#login-button:hover {
  background-color: #EED5B7;
}
</style>