import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import WatcherDemo from "../src/components/WatcherDemo.vue";

describe("WatcherDemo.vue", () => {
  it('updates "updated" when prop value changes', async () => {
    const wrapper = mount(WatcherDemo, { props: { value: 10 } });
    expect(wrapper.text()).toContain("Updated: false");

    // Update the prop value
    await wrapper.setProps({ value: 20 });
    expect(wrapper.text()).toContain("Updated: true");
  });
});
