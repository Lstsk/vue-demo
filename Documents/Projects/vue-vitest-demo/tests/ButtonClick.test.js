import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import ButtonClick from "../src/components/ButtonClick.vue";

describe("ButtonClick.vue", () => {
  it('emits "custom-click" event with correct payload when button is clicked', async () => {
    // Mount the component
    const wrapper = mount(ButtonClick);

    // Find the button and simulate a click event
    await wrapper.find("button").trigger("click");

    // Check that the "custom-click" event was emitted
    expect(wrapper.emitted("custom-click")).toBeTruthy();

    // Check that the event payload is as expected
    const payload = wrapper.emitted("custom-click")[0];
    expect(payload).toEqual(["payload data"]);
  });
});
