import { mount } from "@vue/test-utils";
import HelloWorld from "../src/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Hello Vitest with Composition API!";
    const wrapper = mount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.find("h1").text()).toBe(msg);
  });

  it("increments count when button is clicked", async () => {
    const wrapper = mount(HelloWorld);

    // Initially, count should be 0
    expect(wrapper.find("p").text()).toContain("0");

    // Simulate a button click
    await wrapper.find("button").trigger("click");

    // After clicking, count should be 1
    expect(wrapper.find("p").text()).toContain("1");
  });
});
