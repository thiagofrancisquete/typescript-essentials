function disp_details(id: number, name: string, mail_id ? : string) {
    console.log('id:', id)
    console.log('name:', name)
    if (mail_id != undefined)
        console.log('email id', mail_id)
}
disp_details(123, 'john')
disp_details(111, "mary", 'mary@yaz.com')