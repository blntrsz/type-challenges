type MyPick<Object, Keys extends keyof Object> = { [Key in Keys]: Object[Key] }
