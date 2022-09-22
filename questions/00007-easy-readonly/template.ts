type MyReadonly<Object> = { readonly [Key in keyof Object]: Object[Key] }
