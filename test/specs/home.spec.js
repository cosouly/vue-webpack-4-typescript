import { shallowMount } from "@vue/test-utils";
import Home from "@/pages/home.vue";

describe("home.vue", () => {
  it("renders props.msg when passed", () => {
    const name = "tester";

    const wrapper = shallowMount(Home, {
      propsData: { name }
    });

    expect(wrapper.text()).toBe(
      "Hello tester from my Vue.js page, built with Webpack 4!"
    );
  });
});
