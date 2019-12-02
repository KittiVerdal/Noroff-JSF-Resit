<template>
  <div>
    <b-container>
      <b-row>
        <b-col sm="6" offset-sm="3">
          <b-form @submit="onSubmit">
            <b-form-group id="namefield" label="Your Name*:" label-for="name">
              <b-form-input id="name" v-model="form.name" required placeholder="Enter name"></b-form-input>
            </b-form-group>
            <b-form-group id="numberfiekd" label="Your Phonenumber*:" label-for="number">
              <b-form-input id="number" v-model="form.number" required placeholder="000 00 000"></b-form-input>
            </b-form-group>
            <b-form-group id="Query" label="Query:" label-for="query">
              <b-form-select id="query" v-model="form.query" :options="querys" required></b-form-select>
            </b-form-group>
            <b-form-textarea
              id="textarea"
              v-model="text"
              placeholder="Enter your message..."
              rows="3"
              max-rows="6"
              required
            ></b-form-textarea>
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        number: "",
        query: null
      },
      querys: [
        { text: "Select One", value: null },
        "Enquiry",
        "Complaint",
        "Compliment",
        "General Message"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>