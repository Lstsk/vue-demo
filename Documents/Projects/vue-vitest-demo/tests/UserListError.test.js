import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import UserList from "../src/components/UserList.vue";
import axios from "axios";

vi.mock("axios");

describe("UserList.vue (Error Handling)", () => {
  it("displays an error message when the API call fails", async () => {
    axios.get.mockRejectedValue(new Error("API Error"));
    const wrapper = mount(UserList);
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(wrapper.text()).toContain("Failed to load users");
  });
});
