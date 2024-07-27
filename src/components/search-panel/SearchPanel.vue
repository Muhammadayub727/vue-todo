    <template>
        <div class="d-flex position-relative">
          <input
            type="text"
            class="form-control search-input"
            placeholder="Search Movies"
            @input="changeHandler($event)"
            :value="term"
          />
          <i
            v-if="!term"
            class="fa fa-search search-icon"
          ></i>
          <i
            v-if="term"
            class="fa fa-times cancel-icon"
            @click="clearInput"
          ></i>
        </div>
      </template>
      
      <script>
      export default {
        props: {
          updateTermHandler: {
            type: Function,
            required: true,
          },
        },
        data() {
          return {
            term: "",
          };
        },
        methods: {
          changeHandler(e) {
            this.term = e.target.value;
            this.updateTermHandler(this.term);
          },
          clearInput() {
            this.term = "";
            this.updateTermHandler(this.term);
          },
        },
      };
      </script>
      
      <style scoped>
      .search-input {
        margin-top: 2rem;
        margin-bottom: 1rem;
        padding: 1.5rem;
        background: #fcfaf5;
        border-radius: 4px;
        box-shadow: 15px 15px 15px 15px rgba(0, 0, 0, 0.15);
      }
      .search-icon,
      .cancel-icon {
        position: absolute;
        right: 1.8rem;
        top: 58%;
        transform: translateY(-50%);
        color: #a9a9a9;
        font-size: 1.5rem;
        cursor: pointer;
    }
    </style>