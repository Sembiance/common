module revolve_text(radius, chars) {
    PI = 3.14159;
    circumference = 2 * PI * radius;
    chars_len = len(chars);
    font_size = circumference / chars_len;
    step_angle = 360 / chars_len;
    for(i = [0 : chars_len - 1]) {
        rotate(-i * step_angle) 
            translate([0, radius + font_size / 2, 0]) 
                text(
                    chars[i], 
                    font = "Courier New; Style = Bold", 
                    size = font_size, 
                    valign = "center", halign = "center"
                );
    }
}

