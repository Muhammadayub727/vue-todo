    <template>
    <div class="btn-group">
        <button
        v-for="btn in filterButtons"
        :key="btn.name"
        class="btn"
        type="button"
        :class="[filterName === btn.name ? 'btn-success' : 'btn-outline-success']"
        @click="filterHandler(btn.name)"
        >
        {{ btn.title }}
        </button>
    </div>
    </template>

    <script>
    export default {
    props: {
        updateFilterHandler: {
        type: Function,
        required: true,
        },
        filterName: {
        type: String,
        required: true,
        },
    },
    data() {
        return {
        filterButtons: [
            {
            title: "All movies",
            name: "all",
            },
            {
            title: "Popular movies",
            name: "popular",
            },
            {
            title: "Most viewed movies",
            name: "mostViewed",
            },
        ],
        filter: "all",
        };
    },
    methods: {
        filterHandler(filter) {
        this.filter = filter;
        this.updateFilterHandler(this.filter);
        },
    },
    };
    </script>

    <style>
    </style>