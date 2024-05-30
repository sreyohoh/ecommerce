<template>
  <Navbar
      expand="lg"
      theme="light"
      background-color="light"
  >
      <NavbarBrand>Navbar</NavbarBrand>
      <NavbarToggler />
      <NavbarCollapse>
        <NavbarNavList margin="e-auto">
          <NavItem>
            <NavLink active>
              Sale
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#">
              Link
            </NavLink>
          </NavItem>
          <NavItemDropdown>
            <NavItemDropdownToggle>Dropdown</NavItemDropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem to="#">
                Another action
              </DropdownItem>
              <DropdownItemDivider />
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </NavItemDropdown>
        </NavbarNavList>
        <b-div class="search">

          <BFormInput
              id="exampleBFormControlInput1"
              type="email"
              placeholder="name@example.com"
          />
        </b-div>
        <NavbarNavList >
          <NavItem>
            <NavLink>
              Save
            </NavLink>
          </NavItem>

          <NavItemDropdown>
            <NavItemDropdownToggle>Language</NavItemDropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem to="#">
                Another action
              </DropdownItem>
              <DropdownItemDivider />
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </NavItemDropdown>
          <NavItem>
            <NavLink to="#">
              LogIn
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#">
              SignUp
            </NavLink>
          </NavItem>
          <NavItem v-for="locale in availableLocales" :key="locale.code" >
            <NavLink :to="switchLocalePath(locale.code)">
              {{ locale.name }}
            </NavLink>
          </NavItem>

        </NavbarNavList>
      </NavbarCollapse>

  </Navbar>
</template>
<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
console.log(availableLocales.value);

</script>
