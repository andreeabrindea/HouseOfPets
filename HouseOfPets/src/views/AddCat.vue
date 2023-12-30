<script>
export default {
  data() {
    return {
      name: '',
      age: null,
      timeInShelter: null,
      adopted: '',
      photo: '', 
      description: '',
      previewImage: null,
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
        name: this.name,
        age: parseInt(this.age),
        timeInShelter: parseInt(this.timeInShelter),
        adopted: this.adopted,
        photo: base64String, 
        description: this.description,
      };

      try {
        const response = await fetch('http://localhost:8080/add-cat', {
          method: 'POST',
          mode: "no-cors",
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
  <h1>Add a cat</h1>
  <main>
    <div>
      <label for="name">Name: </label>
      <input v-model="name" type="text" id="name">
    </div>
    <div>
      <label for="age">Age: </label>
      <input v-model="age" type="number" id="age">
    </div>
    <div>
      <label for="timeInShelter">Time in shelter: </label>
      <input v-model="timeInShelter" type="number" id="timeInShelter">
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
    <button @click="addCat">Add Cat into system</button>
    <img :src="previewImage" class="uploading-image" />
  </main>
</template>
