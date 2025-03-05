import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Greeting from "../src/components/Greeting.vue";

describe("Greeting.vue", () => {
  it("renders default greeting when no name is passed", () => {
    const wrapper = mount(Greeting);
    expect(wrapper.text()).toBe("Hello, Guest!");
  });

  it("renders custom greeting when name prop is provided", () => {
    const wrapper = mount(Greeting, {
      props: { name: "Alice" },
    });
    expect(wrapper.text()).toBe("Hello, Alice!");
  });
});
