# Maksim Danko. 

## 20 y.o.

### Student of VSTU. 

# Studying to be a programmer. 

_I have no experience working in a large project, and I don't have any experience in a team. 

My level of English: B1 (at least so showed a couple of tests on the Internet). 

Programming languages studied: java, javascript, python, HTML, CSS, PHP.

## A piece of code from the python task:
  
    e = 2.7
    x, y = symbols("x y")

    fx = (2 * x ** 1 / 2) - (e ** (x / 2)) + 2
    flags = -7
    rez = solve(fx, x, flags)

    print('x = ' + str(rez))
    print()
     # 2
    print("zadanie 1 \n2")

    x = np.arange(0, 4, 0.01)
    y = (2 * x ** 1 / 2) - (e ** (x / 2)) + 2

     fig = plt.subplots()

    plt.plot(x, y)

    plt.show()
    print()
    # 3
    print("zadanie 1 \n3")
     a = float(input("Введите а: "))
     b = float(input("Введите b: "))
     print()


    def f(c):
       return (2 * c ** 1 / 2) - (e ** (c / 2)) + 2


     def Mid(f, a, b, acc=10 ** -7):
      global c
     while abs(b - a) > acc:
        c = (a + b) / 2.0
        fc = f(c)
        fa = f(a)
        fb = f(b)
        if (fc * fa < 0) or (fc * fb < 0):
            a = c
        else:
            b = c
    return c


     c = Mid(f, a, b)
    print("Корень: " + str(c))
    print("Значение функции f(x): " + str(f(c)))

      print()
    # zadanie 2
     print("zadanie 2 \n1")

     # 1
     s = np.arange(-2, 0, 0.01)
    func = 2 / (((2 * s ** 2) + 4 * s + 6) ** 1 / 2)
    fig2 = plt.subplots()
    plt.plot(s, func)
    plt.show()
    print()
    # 2
     print("zadanie 2 \n2")
    x = symbols("x")
    y = 2 / (((2 * x ** 2) + 4 * x + 6) ** 1 / 2)
    print(integrate(y, (x, -2, 0)))

     print()
    # 3
     print("zadanie 2 \n3")


    def RightRect(f, a, b, n):
    print("\nчисло разбиений: ", n)
    h = (b - a) / float(n)
    print("шаг:", h)
    summa = sum([f(a + k * h) for k in range(1, n - 1)])
    result = h * summa
    print("результат: ", result)
    return result


    def f(x):
    return 2 / (((2 * x ** 2) + 4 * x + 6) ** 1 / 2)


    print("Используем формулу правых прямоугольников")
    print("Интегрируемая функция: f(x) = 2 / (((2 * x ** 2) + 4 * x + 6) ** 1 / 2)")

    n = 100
    exp1 = RightRect(f, -2, 0, n)
    print("\nОтвет:", exp1, "\nКоличество разбиений:", n)
     print()

    # zadanie 3
    print("zadanie 3 \n1")


    # 1
    def is_x0_xk_numbers():  # проверка, что введены числа
      global x0, xk, y0
      astr = txtX0.get().strip()
      bstr = txtXK.get().strip()
      cstr = txtY0.get().strip()
      try:
        x0 = float(astr)
        xk = float(bstr)
        y0 = float(cstr)
        return True
    except ValueError:
        pass
    return False


    def result(ev):
      if is_x0_xk_numbers():
        var('x y')
        f = (x ** 2) * y - sin(x + y)
        X = np.linspace(x0, xk, 50)
        h = abs(x0 - xk) / 50
        Y = np.linspace(0, 50)
        Y[0] = y0
        for i in range(49):
            dy1 = h / 2 * f.subs([(x, X[i]), (y, Y[i])])
            dy2 = h / 2 * f.subs([(x, X[i] + h), (y, Y[i] + h * f.subs([(x, X[i]), (y, Y[i])]))])
            dy = dy1 + dy2
            Y[i + 1] = Y[i] + dy
        root = Tk()
        frm = Frame(root)
        fig = plt.figure(facecolor='white')
        ax = fig.add_subplot(111)
        ax.plot(X, Y, '-rh', linewidth=3, markersize=5, markerfacecolor='yellow', label=r'$f(X)$')
        ax.grid(color='b', linewidth=0.5)
        plt.legend(fontsize=12)
        canvasAgg = FigureCanvasTkAgg(fig, master=frm)
        canvasAgg.draw()
        canvas = canvasAgg.get_tk_widget()
        canvas.pack(fill=BOTH, expand=1)
        frm.pack(fill=BOTH, expand=1)

        def progquit():
            root.quit()
            root.destroy()

        button = Button(master=root, text='Выход', command=progquit)
        button.pack(side=BOTTOM)
        root.mainloop()
    else:
        print("Ошибка ввода!")
        return
    return


     root = Tk()
     root.geometry('400x170')
    frm = Frame(root)
    fig = plt.figure(facecolor='white')

    txtX0 = Entry(root, font='Arial 10')
    txtX0.insert(0, "0.0")
     txtX0.place(x=20, y=20, width=60, height=25)
     lblX0 = Label(root, font='Arial 10', text='x0 - начало интервала')
      lblX0.place(x=90, y=20, width=150, height=25)

      txtXK = Entry(root, font='Arial 10')
      txtXK.insert(0, "0.0")
      txtXK.place(x=20, y=60, width=60, height=25)
      lblXK = Label(root, font='Arial 10', text='xk - конец интервала')
      lblXK.place(x=90, y=60, width=150, height=25)

     txtY0 = Entry(root, font='Arial 10')
      txtY0.insert(0, "0.0")
     txtY0.place(x=20, y=100, width=60, height=25)
      lblY0 = Label(root, font='Arial 10', text='y[x0] - у от начального значения интервала')
      lblY0.place(x=90, y=100, width=260, height=25)
  
     btnRes = Button(root, text='Построить график', font='Arial 10')
     btnRes.bind("<Button-1>", result)
     btnRes.place(x=20, y=140, width=130, height=25)

     btnQuit = Button(root, text='Выход', command=root.quit())
     btnQuit.place(x=200, y=140, width=80, height=25)
     root.mainloop()


 
