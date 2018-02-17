function disp_details(id, name, mail_id) {
    console.log('id:', id);
    console.log('name:', name);
    if (mail_id != undefined)
        console.log('email id', mail_id);
}
disp_details(123, 'john');
disp_details(111, "mary", ' mary@yaz.com');
