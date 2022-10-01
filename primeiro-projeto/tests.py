from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

servico = Service(ChromeDriverManager().install())
chrome_opt = Options()
chrome_opt.add_experimental_option("detach", True)
navegador = webdriver.Chrome(service=servico, chrome_options=chrome_opt)

navegador.get('http://localhost:4200')

navegador.find_element('xpath', '//*[@id="navbarCollapse"]/ul/li[2]/a').click()
navegador.find_element('xpath', '//*[@id="cpf"]').send_keys('12345678990')
navegador.find_element('xpath', '//*[@id="password"]').send_keys('123456')
navegador.find_element('xpath', '/html/body/app-root/app-login/html/body/section/div/div/div/div/div/form/div[4]/button').click()

#navegador.find_element('xpath', '/html/body/app-root/app-login/html/body/section/div/div/div/div/div/form/div[5]/a').click()