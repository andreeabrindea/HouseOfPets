<template>
    <div>
        <TopBar></TopBar>
        <p class="cursive-font">{{ cat.name }}</p>
        <main class="profile">
            <img class="animal-profile-picture" :src="cat.image">
        </main>
        <div class="description-adopt-button">
            <p>{{ cat.description }}</p>
            <div class="button-box">
                <button class="adopt-button" @click="openAdoptionForm">Adopt</button>
            </div>
        </div>

        <div v-if="showAdoptionForm" class="popup">
            <div class="popup-content">
                <span class="close-button" id="close-button" @click="closeAdoptionForm">&times;</span>
                <form class="form-content">
                    <div>
                        <img src="./assets/houseOfPets.png" class="logo-image" id="logo-image">
                    </div>
                    <div class="form-content-personal-information">
                        <label for="name" id="name-label">Name:</label>
                        <input type="text" id="name-input" v-model="adoptForm.name" required>

                        <label for="address" id="address-label">Address:</label>
                        <input type="text" id="address-input" v-model="adoptForm.address" required>

                        <label for="contact" id="contact-label">Contact Number:</label>
                        <input type="text" id="contact-input" v-model="adoptForm.contact" required>
                        <button type="button" id="submit-button" @click="submitAdoptionForm">Submit</button>
                        <p id="information-paragraph">Enter your details and we will contact you soon!</p>
                    </div>
                </form>
            </div>
        </div>

        <Footer class="credits"></Footer>
    </div>
</template>
  
<script setup lang="ts">
import TopBar from './views/TopBar.vue'
import Footer from './components/Footer.vue'
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import emailjs from 'emailjs-com';

const cat = ref({
    name: '',
    picture: '',
    description: '',
    image: ''
});

const $route = useRoute();

onMounted(() => {
    const animalId = $route.params.id;
    fetchAnimalDetails(animalId);
});

const fetchAnimalDetails = async (animalId: any) => {
    try {
        const response = await fetch(`http://127.0.0.1:5000/cats/${animalId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        cat.value = data;
        cat.value.image = `data:image/jpeg;base64,${cat.value.image}`
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const showAdoptionForm = ref(false);
const adoptForm = reactive({
    name: '',
    address: '',
    contact: '',
});

const openAdoptionForm = () => {
    showAdoptionForm.value = true;
};

const closeAdoptionForm = () => {
    showAdoptionForm.value = false;
};

const submitAdoptionForm = () => {
    const templateParams = {
        from_name: adoptForm.name,
        to_name: 'andreeabrindea61@gmail.com',
        message: `We got a new adoption request for ${cat.value.name}. Please contact ${adoptForm.contact} for more information. The person is located in ${adoptForm.address}.`,
    };

    emailjs.send('service_gdduyno', 'template_e1ae25s', templateParams, 'cPo-DvXcmQTUcWCat')
        .then((response) => {
            console.log('Email sent successfully:', response);
            closeAdoptionForm();
        })
        .catch((error) => {
            console.error('Error sending email:', error);
        });
};
</script>
  
<style>
.credits {
    margin-bottom: 2vh;
}

.profile {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.animal-profile-picture {
    width: 50%;
}

.cursive-font {
    font-family: 'Snell Roundhand', cursive;
    margin-left: 8vw;
    font-size: 40px;
}

.description-adopt-button {
    margin-left: 8vw;
}

.adopt-button {
    background-color: #E8A444;
    color: white;
    border: 0;
    border-radius: 2vh;
    height: 2em;
    width: 6em;
}

.adopt-button:hover {
    background-color: #EED5B7;
}

.popup {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
}

@media (max-width: 768px) {
    .popup-content {
        max-width: 100%;
        padding: 8px;
    }

    #logo-image {
        height: 50px;
    }

    #name-label,
    #name-input,
    #address-label,
    #address-input,
    #contact-label,
    #contact-input,
    #close-button,
    #submit-button {
        font-size: 12px;
    }

    .form-content {
        display: flex;
        flex-direction: column;
    }

    #information-paragraph {
        font-size: 12px;
    }

}

.popup-content {
    background: #fff;
    border-radius: 5px;
}

.form-content {
    display: flex;
    flex-direction: column;
    margin-right: 2vw;
}

.logo-image {
    height: 200px;
}

.form-content {
    display: flex;
    flex-direction: row;
}

.form-content-personal-information {
    display: flex;
    flex-direction: column;
    margin-right: 2vw;
}

.close-button {
    font-size: 32px;
    font-weight: 360;
    border-radius: 10px;
    padding: 4%;
}

.close-button:hover {
    cursor: pointer;
}

#submit-button {
    background-color: #ECD8AE;
    color: white;
    border: 0;
    border-radius: 2vh;
    height: 2em;
    width: 6em;
    margin-top: 2vh;
    align-self: center;
    margin-bottom: 2vh;
}

#submit-button:hover {
    background-color: #E8A444;
}

#information-paragraph {
    color: gray;
    margin-bottom: 2vh;
}
</style>
  