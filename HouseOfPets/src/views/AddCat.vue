<script>
export default {
  data() {
    return {
      id: 92,
      name: '',
      birth_year: null,
      joined_shelter_ts: null,
      adopted: '',
      image: '', 
      description: '',
      previewImage: null,
      special_needs: null,
      gender: null
    };
  },
  methods: {
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
        console.log(this.previewImage);
      };
    },
    async addCat() {
      const base64Index = this.previewImage.indexOf('base64,');
      const base64String = this.previewImage.substring(base64Index + 7);
      const cat = {
        id: 92,
        name: this.name,
        birth_year: parseInt(this.birth_year),
        joined_shelter_ts: parseInt(this.joined_shelter_ts),
        adopted: this.adopted,
        image: base64String, 
        description: this.description,
        special_needs: this.special_needs,
        gender: this.gender
      };

      try {
        const response = await fetch('http://127.0.0.1:5000/cats', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(cat),
        });
        console.log('Cat added successfully');
      } catch (error) {
        console.error('Error:', error);
      }
    },
  },
};
</script>

<template>
  <div class="page-wrapper">
    <h1 class="cursive-font">Add a cat</h1>
    <main>
      <div>
        <label for="name">Name: </label>
        <input v-model="name" type="text" id="name">
      </div>
      <div>
        <label for="birth-year">Birth Year: </label>
        <input v-model="birth_year" type="number" id="birthYear">
      </div>
      <div>
        <label for="joinedShelter">Joined Shelter: </label>
        <input v-model="joined_shelter_ts" type="number" id="joinedShelter">
      </div>
      <div>
        <label for="adopted">Adopted </label>
        <input v-model="adopted" type="text" id="adopted">
      </div>
      <div>
        <label for="photo">Photo: </label>
        <input type="file" accept="image/jpeg" @change="uploadImage" id="photo">
      </div>
      <div>
        <label for="description">Description: </label>
        <input v-model="description" type="text" id="description">
      </div>
      <div>
        <label for="gender">Gender: </label>
        <input v-model="gender" type="text" id="gender">
      </div>
      <div>
        <label for="special-needs">Special Needs: </label>
        <input v-model="special_needs" type="text" id="specialNeeds">
      </div>
      <button @click="addCat">Add Cat</button>
      <a href="/admin"><button>Discard</button></a><br>
    </main>
  </div>
</template>
<style>
.cursive-font {
    font-family: 'Snell Roundhand', cursive;
    color: #E8A444;
    font-weight: bold;
}

.page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Palatino', 'URW Palladio L', serif;
}
</style>