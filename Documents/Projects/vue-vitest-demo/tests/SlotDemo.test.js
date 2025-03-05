import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import SlotDemo from "../src/components/SlotDemo.vue";

describe("SlotDemo.vue", () => {
  it("renders default slot content when no slot is provided", () => {
    const wrapper = mount(SlotDemo);
    expect(wrapper.text()).toContain("Default slot content");
  });

  it("renders provided slot content", () => {
    const wrapper = mount(SlotDemo, {
      slots: {
        custom: "<span>Custom slot content</span>",
      },
    });
    expect(wrapper.html()).toContain("Custom slot content");
  });
});
