import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import SnapShotDemo from "../src/components/SnapShotDemo.vue";

describe("SnapShotDemo.vue Snapshot", () => {
  it("matches the snapshot", () => {
    // Mount the component with a custom prop value
    const wrapper = mount(SnapShotDemo, {
      props: { msg: "Snapshot Test" },
    });

    console.log(wrapper.html());

    // Capture and compare the snapshot of the component's HTML
    expect(wrapper.html()).toMatchSnapshot();
  });
});
