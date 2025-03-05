import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import InputForm from "../src/components/InputForm.vue";

describe("InputForm.vue", () => {
  it("updates model when input changes", async () => {
    const wrapper = mount(InputForm);
    const input = wrapper.find("input");

    await input.setValue("Hello Vue");
    expect(wrapper.find("p").text()).toContain("Hello Vue");
  });
});
