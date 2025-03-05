// tests/components/ParentComponent.test.js
import { shallowMount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import ParentComponent from "../src/components/ShallowMount.vue";

describe("ParentComponent.vue", () => {
  it("renders the parent component without fully rendering the child", () => {
    const wrapper = shallowMount(ParentComponent);

    // Verify that the parent component's content is rendered
    expect(wrapper.find("h1").text()).toBe("Parent Component");

    // Check that the child component is present but not fully rendered
    // The stub is used in place of the actual ChildComponent
    const childStub = wrapper.findComponent({ name: "ChildComponent" });
    expect(childStub.exists()).toBe(true);
  });
});
